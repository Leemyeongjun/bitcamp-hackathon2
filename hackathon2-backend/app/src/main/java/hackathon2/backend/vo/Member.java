package hackathon2.backend.vo;

public class Member extends Info {
  private String nickName; // 회원 닉네임
  private String genre; // 회원 선호장르


  public String getGenre() {
    return genre;
  }
  public void setGenre(String genre) {
    this.genre = genre;
  }


}
