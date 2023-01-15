package hackathon2.backend.vo;

public class Review extends Info {
  private String content;
  private int no;

  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
}
