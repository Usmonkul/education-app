import cn from "classnames";
import { ButtonProps } from "./button.props";
import styles from "./button.module.css";
import ArrowIcon from "./arrow.svg";
const Button = ({
  children,
  apperance,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: apperance === "primary",
        [styles.ghost]: apperance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <div
            className={cn({
              [styles.down]: arrow === "down",
            })}
          >
            <ArrowIcon />
          </div>{" "}
        </span>
      )}
    </button>
  );
};

export default Button;
