import classes from "src/components/Main/Main.module.css";
import { Headlien } from "src/components/Headline/";
import { Links } from "src/components/Link";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headlien page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headlien>
      <Links />
    </main>
  );
}
