import styles from "./page.module.css";
import Image from "next/image";
import postImage from "../../../../../../public/images/join cashmatrix.png";
import BlogCard from "@/component/BlogCard/BlogCard";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.postBox}>
          <div className={styles.postContent}>
            <h1 className={styles.postHeading}>
              Nam mattis non turpis in congue. In sed lectus sed arcu finibus fringilla ac nec est.
              Vivamus gravida neque lorem.
            </h1>
            <small className={styles.postSmall}>
              <p className={styles.postAuthor}>by lorem ipsum</p>
              <p className={styles.postDate}>26th june 2025</p>
            </small>
            <Image src={postImage} alt="Blog Image" className={styles.postImage} />
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed quam ante. Sed
              ante massa, facilisis et odio sit amet, convallis pretium velit. Aliquam erat
              volutpat. Etiam sit amet placerat quam. Nunc fringilla diam ut convallis consequat.
              Mauris faucibus sem eu iaculis pellentesque. Donec in tincidunt nisl, vitae porta
              purus. Vivamus faucibus commodo sem vitae viverra. Aenean imperdiet et odio at
              bibendum. Nullam ultricies feugiat diam vel semper. Nam mattis non turpis in congue.
              In sed lectus sed arcu finibus fringilla ac nec est. Vivamus gravida neque lorem, id
              fringilla nisl maximus vel. In eu euismod metus.
            </p>
            <p className={styles.content}>
              Sed tellus leo, fringilla et nunc eget, auctor rutrum dolor. Ut enim ipsum, interdum
              quis ullamcorper a, lobortis eu sem. In diam purus, faucibus in massa facilisis,
              hendrerit condimentum sem. Fusce imperdiet tristique enim, sed maximus est iaculis
              sed. Vivamus lacus nisl, mollis eget dolor ullamcorper, ultricies euismod nisi. Ut
              nulla turpis, maximus et quam sit amet, tristique efficitur massa. Morbi nisl quam,
              maximus a volutpat in, scelerisque vel turpis. Praesent luctus sapien est, vitae
              tempus risus iaculis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              quis accumsan massa. Nulla ligula orci, iaculis non euismod vitae, tristique eu eros.
              Morbi nec ligula purus. Mauris quis elit aliquet, elementum ligula ut, porttitor
              mauris. Sed dapibus condimentum dignissim. Suspendisse laoreet lectus eu arcu
              dignissim tincidunt.
            </p>
            <h3 className={styles.postSubHeading}>
              Sed dapibus condimentum dignissim. Suspendisse laoreet lectus eu arcu.
            </h3>
            <p className={styles.content}>
              Etiam eget quam sit amet enim aliquam malesuada. Morbi tincidunt sapien eget sem
              viverra, varius elementum elit rhoncus. Curabitur dignissim, justo id laoreet dictum,
              orci mi consequat justo, quis maximus lectus nisl quis ipsum. Proin nisi arcu,
              molestie quis sagittis quis, volutpat sollicitudin purus. Maecenas vestibulum orci
              libero, sit amet interdum augue pulvinar in. Vivamus vehicula fringilla arcu, a dictum
              dolor consectetur at. In dictum eleifend metus, vitae rhoncus est hendrerit ac.
              Suspendisse potenti. Nam at varius nisl. Cras ornare non felis vitae consectetur. Nunc
              ac rutrum orci. In ultrices pulvinar scelerisque. Nulla ullamcorper eros a lectus
              tempor viverra. Donec sagittis nisi sit amet lectus placerat, sit amet convallis nulla
              luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className={styles.content}>
              Nam pellentesque mi non diam euismod maximus. Donec ut vestibulum lectus, eget egestas
              neque. Fusce eu fringilla dui. Nulla facilisi. Fusce finibus id dolor at cursus.
              Praesent justo purus, efficitur nec dignissim vel, pulvinar ut dui. Sed eget turpis
              est. Maecenas sagittis consequat mattis. Cras vel velit non diam commodo venenatis.
            </p>
            <h3 className={styles.postSubHeading}>Conclusion</h3>
            <p className={styles.content}>
              Nam pellentesque mi non diam euismod maximus. Donec ut vestibulum lectus, eget egestas
              neque. Fusce eu fringilla dui. Nulla facilisi. Fusce finibus id dolor at cursus.
              Praesent justo purus, efficitur nec dignissim vel, pulvinar ut dui. Sed eget turpis
              est. Maecenas sagittis consequat mattis. Cras vel velit non diam commodo venenatis.
            </p>
            <p className={styles.share}>Share</p>
            <div className={styles.socials}>
              <span className={styles.icon}>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span className={styles.icon}>
                <i className="fa-brands fa-x-twitter"></i>
              </span>
              <span className={styles.icon}>
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.latestPost}>
          <h2 className={styles.latestHeading}>Latest Blog</h2>
          <div className={styles.latestBox}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
