import { ReactNode } from "react";
import "./styles.scss";

type QuestionType = {
  content: string;
  user: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export function Question({ content, user, children }: QuestionType) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={user.avatar} alt={user.name} />
          <span>{user.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
