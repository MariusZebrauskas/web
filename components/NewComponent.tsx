import { useRouter } from "next/router";

const NewComponent = ({ pages }: any) => {
  const router = useRouter();

  console.log(pages);

  const goToPage = (to: any) => {
    router.push(`/slug`);
  };

  return (
    <div style={{ display: "flex" }}>
      {pages.map((singlePageButton: any) => {
        console.log(singlePageButton);
        return (
          <div key={singlePageButton.page}>
            <button onClick={() => goToPage(singlePageButton.page)}>
              {singlePageButton.page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NewComponent;
