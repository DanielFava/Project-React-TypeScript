import { ReactNode } from "react";
import cx from "classnames";
import "./styles.scss";

type QuestionType = {
  content: string;
  user: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
};

export function Question({
  content,
  user,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionType) {
  return (
    <div
      className={cx(
        "question",
        { answered: isAnswered },
        { highlighted: isHighLighted && !isAnswered }
      )}
    >
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
