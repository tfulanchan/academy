import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { useEffect, useState } from "react";
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div>
          <h2>{date.toLocaleDateString()}</h2>
          <h2>
            {date.toLocaleTimeString()}
          </h2>
          <h3>
            {
              date
                .toLocaleTimeString(undefined, { timeZoneName: "short" })
                .split(" ")[2]
            }
          </h3>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/disclosure/"
          >
            الإفصاح
          </Link>
        </div>
      </div>
    </header>
  );
}
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/disclosure/"
          >
            Disclosure ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <Clock />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
