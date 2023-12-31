package A109.TikTagTalk.domain.wallet.service;

import A109.TikTagTalk.domain.wallet.dto.CurrencyDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CurrencyConverterServiceImpl implements CurrencyConverterService{
    @Value("${currencyLayer.source}")
    private String sendCountry;

    private final CurrencyAPIService currencyAPIService;
    @Override
    public Double getCurrencyRate(String receiveCountry) {
        CurrencyDto currency = currencyAPIService.getCurrency();
        String sendReceiveCountry = sendCountry + receiveCountry;
//        String sendReceiveCountry = "USDKRW";
        Double convertedCurrency = currency.getQuotes().get(sendReceiveCountry);
        System.out.println(convertedCurrency);
        return convertedCurrency;
    }
}
