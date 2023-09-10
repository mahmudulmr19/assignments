const categoryFilter = document.getElementById("category_filter_container");
let allData;

async function getAllCategory() {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/videos/categories`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

const nonActiveClassName =
  "inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-[#25252533] bg-[#25252533] text-black hover:bg-[#25252533]/10 h-19 px-5 py-2 font-semibold";
const activeClassName =
  "inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-[#FF1F3D] bg-[#FF1F3D] text-white hover:bg-[#FF1F3D]/90 h-19 px-5 py-2 font-semibold";

function createCategoryButtons(categories) {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.category;
    button.id = "category-filter-button";
    if (button.textContent === "All") {
      button.className = activeClassName;
    } else {
      button.classList = nonActiveClassName;
    }

    if (category.category === "All") {
      getDataByCategoryId(category.category_id).then((data) => {
        allData = data;
        showData(data);
      });
    }

    categoryFilter.appendChild(button);

    // Add event listeners to the buttons for filtering content based on the category
    button.addEventListener("click", () => {
      const buttons = document.querySelectorAll("#category-filter-button");
      buttons.forEach((btn) => {
        btn.className = nonActiveClassName;
      });
      button.classList = activeClassName;
      getDataByCategoryId(category.category_id).then((data) => {
        allData = data;
        showData(data);
      });
    });
  });
}

getAllCategory().then((data) => {
  createCategoryButtons(data);
});

async function getDataByCategoryId(categoryId) {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching category data:", error);
    return [];
  }
}

function showData(data) {
  const showContentContainer = document.getElementById(
    "show-content-container"
  );

  // Clear the container before adding new content
  showContentContainer.innerHTML = "";

  if (data.length === 0) {
    showContentContainer.innerHTML = notFound();
  } else {
    showContentContainer.innerHTML = renderContentData(data);
  }
}

function notFound() {
  return `<div class="py-20">
  <div class="flex flex-col items-center justify-center gap-4">
	<img src="./images/icon.svg" alt="not found logo" />
	<p class="text-2xl max-w-[300px] font-bold text-center">
	  Oops!! Sorry, There is no content here
	</p>
  </div>
</div>`;
}

function renderContentData(data) {
  return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-14 gap-x-4 gap-y-8">
  	${data
      .map((item) => {
        return `<div class="flex flex-col gap-4 w-full">
		<img
		  src="${item.thumbnail}" 
		  alt=""
		  class="w-full rounded-md h-[200px] object-cover"
		/>

		
		${item.authors
      .map((ar) => {
        return `<div class="flex items-start gap-2">
		<img
		  src="${ar.profile_picture}"
		  alt="${ar.profile_name}"
		  class="rounded-full w-10 h-10 object-cover"
		/>

		<div class="flex flex-col items-start">
		<h4 class="font-bold text-[#171717] text-lg"> ${item.title}</h4>
		<div class="flex items-center gap-2">
			<span class="text-[#171717B2] font-medium">${ar.profile_name}</span>
			${
        ar.verified
          ? ar.verified === true &&
            `
			<img src="./images/batch.svg" alt="verified batch" class="h-5 w-5"/>`
          : ``
      }
		</div>
    <p class="text-[#171717B2] font-medium">${item.others.views} views</p>
		</div>
		
	  </div>`;
      })
      .join("")}

		
	  </div>`;
      })
      .join("")}
  </div>`;
}

const sortByView = document.getElementById("sort-by-view");

sortByView.addEventListener("click", () => {
  // Sort the data by views in descending order
  const sortedData = allData.slice().sort((a, b) => {
    // Convert views to numbers for comparison
    const viewsA = parseInt(a.others.views);
    const viewsB = parseInt(b.others.views);

    return viewsB - viewsA;
  });

  // Update the displayed content with sorted data
  showData(sortedData);
});
