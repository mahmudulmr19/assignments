let displayLimit = 6;

// loading spinner
const loadingSpinner = document.getElementById("loading");

// get the see more button
const seeAll = document.getElementById("see-more");

// fetch data
const fetchData = async (displayLimit, sort) => {
  try {
    loadingSpinner.classList.remove("hidden");
    const response = await fetch(
      "https://openapi.programming-hero.com/api/ai/tools"
    );
    const data = await response.json();
    showData(data.data.tools, displayLimit, sort);
    if (data.data.tools.slice(displayLimit).length === 6) {
      seeAll.classList.remove("hidden");
    } else {
      seeAll.classList.add("hidden");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loadingSpinner.classList.add("hidden");
  }
};

// show data
const showData = (data, displayLimit, sort) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";

  if (sort) {
    data.sort(function (a, b) {
      var c = new Date(a.published_in);
      var d = new Date(b.published_in);
      return c - d;
    });
  }

  for (const singleData of data.slice(0, displayLimit)) {
    cardContainer.innerHTML += `
    <div class="bg-white border border-gray-200 rounded-lg shadow">
  <div class="p-5">
    <a>
      <img
        class="rounded object-contain w-full"
        src="${singleData.image}"
        alt=""
      />
    </a>
    <a href="#">
      <h5 class="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
        Features
      </h5>
    </a>
    <ul class="mb-3 font-normal text-gray-700">
      ${singleData.features
        .map(
          (feature, index) => `
      <li>${index + 1}. ${feature}</li>
      `
        )
        .join("")}
    </ul>

    <hr class="border border-gray-200 mt-2" />
    <a href="#">
      <h5 class="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
        ${singleData.name}
      </h5>
    </a>

    <div class="mt-3 flex items-center justify-between">
    <div class="flex items-center gap-1.5">
    <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z"
        stroke="#585858"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    </svg>

    <span>${singleData.published_in}</span>
    </div>
  
    <label for="data-modal"  onclick="getDataDetails('${
      singleData.id
    }')" class="bg-[#FEF7F7] p-3 rounded-full cursor-pointer hover:bg-[#cbc6c6] transition-colors duration-200">
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75"
        stroke="#EB5757"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    </label>

    </div>
  </div>
</div>
`;
  }
};

// fetch data details
const getDataDetails = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await response.json();
  showDataDetails(data.data);
};

// show data details
const showDataDetails = (data) => {
  const pricing = data.pricing;
  const features = data.features;
  const Integrations = data.integrations;

  let singleFeature = [];

  for (let key in features) {
    const feature = features[key].feature_name;
    singleFeature.push(feature);
  }

  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `

  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div class="bg-[#EB57570D] p-4 md:p-8 rounded-lg border border-red-500">
    <h1 class="text-[12px] md:text-sm font-semibold">${data.description}</h1>
    <div class="grid grid-cols-3 gap-2 mt-2">
      <div class="text-[12px] sm:text-sm rounded-lg bg-white p-3 text-center">
        <span
          >${data.pricing !== null ? pricing[0].price : "Free of Cost / "}
        </span>
        <br />
        <span>${data.pricing !== null ? pricing[0].plan : "Basic"} </span>
      </div>

      <div class="text-[12px] sm:text-sm rounded-lg bg-white p-3 text-center">
        <span
          >${data.pricing !== null ? pricing[1].price : "Free of Cost / "}
        </span>
        <br />
        <span>${data.pricing !== null ? pricing[1].plan : "Pro"} </span>
      </div>

      <div class="text-[12px] sm:text-sm rounded-lg bg-white p-3 text-center">
        <span
          >${data.pricing !== null ? pricing[2].price : "Free of Cost / "}
        </span>
        <span>${data.pricing !== null ? pricing[2].plan : "Enterprise"} </span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-2">
      <div>
        <h1 class="font-semibold">Features</h1>

        <ul>
          ${singleFeature
            .map(
              (feature) => `
          <li>&#x2022; ${feature}</li>
          `
            )
            .join("")}
        </ul>
      </div>

      <div>
        <h1 class="font-semibold">Integrations</h1>
        <ul>
          ${
            Integrations !== null
              ? Integrations.map(
                  (singleIntegration) =>
                    `<li>&#x2022; ${singleIntegration}</li>`
                ).join("")
              : "No data Found"
          }
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-[#FFFFFF] border border-[#E7E7E7] rounded-lg p-8 relative">
    <div>
      <img src="${data.image_link[0]}" class="rounded-lg" />
      <h1
        id="accuracy"
        class="absolute top-10 right-10 bg-red-500 text-white px-2 py-1.5 rounded"
      >
        ${
          data.accuracy.score !== null ? data.accuracy.score + "% accuracy" : ""
        }
      </h1>
      <h1 class="text-[12px] sm:text-base mt-1 text-center font-semibold">
        ${
          data.input_output_examples
            ? data.input_output_examples[0].input
            : "No! Not Yet! Take a break!!!"
        }
      </h1>

      <p class="text-[12px] sm:text-base text-center">
        ${
          data.input_output_examples
            ? data.input_output_examples[0].output
            : "No! Not Yet! Take a break!!!"
        }
      </p>
    </div>
  </div>
</div>

  
  `;
  if (document.getElementById("accuracy").innerText === "") {
    accuracy.classList.add("hidden");
  }
};

fetchData(displayLimit, false); // default display limit is 6

// sort by date ascending
const ascending = () => {
  if (displayLimit === 6) {
    fetchData(6, true);
  } else {
    fetchData(12, true);
  }
};

// see more button click to show all the data
seeAll.addEventListener("click", () => {
  fetchData((displayLimit = 12), false);
  seeAll.classList.add("hidden");
});
