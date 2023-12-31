package A109.TikTagTalk.domain.tagRoom.entity;

import A109.TikTagTalk.domain.account.entity.Account;
import A109.TikTagTalk.domain.user.entity.Member;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Entity
public class MemberItem {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name="position_x")
    private Long positionX;
    @Column(name="position_y")
    private Long positionY;
    @Column(name="grid_z_number")
    private Long positionZ;

    private Boolean inroom;
    private Boolean wall;
    private Long rotation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ITEM_ID")
    private Item item;
}
