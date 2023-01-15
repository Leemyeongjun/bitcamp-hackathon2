package hackathon2.backend.dao;

import java.sql.Date;
import java.util.Arrays;
import org.springframework.stereotype.Repository;
import hackathon2.backend.vo.Member;

@Repository
public class MemberDao {
  private static final int SIZE = 100;

  private int count;
  private Member[] members = new Member[SIZE];

  public void insert(Member member) {
    member.setCreatedDate(new Date(System.currentTimeMillis()).toString());
    this.members[this.count++] = member;
  }

  public Member[] findAll() {
    return Arrays.copyOf(members, count);
  }

  public void update(Member member) {
    this.members[this.indexOf(member)] = member;
  }

  public void delete(Member member) {
    for (int i = this.indexOf(member) + 1; i < this.count; i++) {
      this.members[i - 1] = this.members[i];
    }
    this.members[--this.count] = null;
  }

  private int indexOf(Member m) {
    for (int i = 0; i < this.count; i++) {
      if (this.members[i].getNickName() == m.getNickName()) {
        return i;
      }
    }
    return -1;
  }
}
