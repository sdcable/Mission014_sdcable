import styles from "./first.module.css";

function TopBanner(props: any) {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="CompanyLogo" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.message}</h1>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
