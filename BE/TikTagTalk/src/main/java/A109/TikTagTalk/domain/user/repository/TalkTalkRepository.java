package A109.TikTagTalk.domain.user.repository;

import A109.TikTagTalk.domain.user.entity.TalkTalk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TalkTalkRepository extends JpaRepository<TalkTalk, Long> {

    @Query("SELECT t FROM TalkTalk t " +
            "WHERE t.sender.id = :senderId " +
            "AND t.receiver.id = :receiverId")
    Optional<TalkTalk> findBySenderIdAndReceiverId(Long senderId, Long receiverId);

    @Query("SELECT t FROM TalkTalk t " +
            "WHERE t.sender.id = :memberId " +
            "OR t.receiver.id = :memberId")
    List<TalkTalk> findBySenderIdAndReceiverId(Long memberId);
}
