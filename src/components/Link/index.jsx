import classes from "src/components/Link/Link.module.css";

export function Links({ items }) {
  return (
    <div className={classes.grid}>
      {items.map((item, index) => {
        return (
          <a href={item.href} className={classes.card} key={index}>
            <h2 className={classes.title}> {item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
