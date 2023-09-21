//package A109.TikTagTalk.global.login.handler;
//
//import A109.TikTagTalk.domain.user.repository.MemberRepository;
//import A109.TikTagTalk.global.jwt.service.JwtService;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//
//import java.io.IOException;
//
//@Slf4j
//@RequiredArgsConstructor
//public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
//
//    private final JwtService jwtService;
//    private final MemberRepository memberRepository;
//
//    @Value("${jwt.access.expriation}")
//    private String accessTokenExpiration;
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
//
//        String userId = extractUserName(authentication); // 인증 정보에서 Username(userId) 추출
//        String accessToken = jwtService.createAccessToken(userId); // JwtService의 createAccessToken을 사용하여 AccessToken 발급
//        String refreshToken = jwtService.createRefreshToken(); // JwtService의 createRefreshToken을 사용하여 RefreshToken 발급
//
//        jwtService.sendAccessAndRefreshToken(response, accessToken, refreshToken); // 응답 헤더에 AccessToken, RefreshToken 실어서 응답
//        jwtService.updateRefreshToken(userId, refreshToken);
//
//        memberRepository.findByUserId(userId)
//                .ifPresent(member -> {
//                    member.updateRefreshToken(refreshToken);
//                    memberRepository.saveAndFlush(member);
//                });
//        log.info("로그인에 성공하였습니다. 아이디 : {}", userId);
//        log.info("로그인에 성공하였습니다. AccessToken : {}", accessToken);
//        log.info("발급된 AccessToken 민료 기간 : {}", accessTokenExpiration);
//    }
//
//    private String extractUserName(Authentication authentication) {
//        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//        return userDetails.getUsername();
//    }
//}