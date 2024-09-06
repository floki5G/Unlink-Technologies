import { useMemo } from "react";
import { useAppSelector } from "../../redux/configure-store";
import { ArticleCard } from "./modules/Card";
import { FaWikipediaW } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BoldHeading } from "./modules/BoldHeading";
import { LightHeading } from "./modules/LightHeading";

export function IndexComponent() {

  const selectUncomingLaunches = useAppSelector(
    (state) => state.common.uncomingLaunches
  );
  const selecrPreviousLaunches = useAppSelector(
    (state) => state.common.previousLaunches
  );
  const uncomingData = useMemo(() => {
    return {
      data: [
        {
          title: "MISSION NAME",
          desc: selectUncomingLaunches.docs[0]?.name || "",
        },

        {
          title: "ROCKET",
          desc: selectUncomingLaunches.docs[0]?.rocket?.name || "",
        },

        {
          title: "FLIGHT NUMBER",
          desc: selectUncomingLaunches.docs[0]?.flight_number || "",
        },
        {
          title: "TIME (UTC)",
          desc:
            `${new Date(selectUncomingLaunches.docs[0]?.date_utc).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })} ${new Date(selectUncomingLaunches.docs[0]?.date_utc).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            }` || "",
        },
        // "LINKS",
      ],
      logo: {
        title: "ROCKET LOGO",
        desc: selectUncomingLaunches.docs[0]?.rocket?.name,
        image: selectUncomingLaunches.docs[0]?.links?.patch?.small,
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="50.61"
            viewBox="0 0 64.917 45.619"
          >
            <path
              d="M54.296 29.82a3.876 3.876 0 01-.072-.397c-.121-.869-.829-1.74-1.804-2.218-1.029-.506-2.29-.743-5.435-1.02-.685-.06-1.267-.13-1.293-.157-.084-.084.385-.509.899-.814.272-.163.495-.319.496-.347 0-.03-.22-.068-.49-.086-.342-.023-.83-.16-1.595-.448-.606-.229-1.31-.458-1.562-.51l-.46-.094.283-.216c.155-.119.283-.246.283-.283 0-.096-.914-.24-1.502-.237-.278.002-.771.05-1.096.109-.325.057-.601.095-.614.084-.054-.046 1.192-.52 1.69-.642.314-.077.865-.132 1.325-.134.85-.002 1.21.079 2.432.55.386.148.722.248.748.222.094-.093-.368-.788-.686-1.032-.528-.406-.945-.46-3.557-.456-4.446.006-9.036.631-11.848 1.614-.58.203-.778.238-1.095.197-1.488-.197-4.732-1.83-8.824-4.446-2.1-1.343-7.643-5.158-8.03-5.527-.043-.042.382.142.945.408 6.543 3.093 13.984 5.207 21.728 6.172 2.813.351 5.311.532 9.191.667 1.588.055 1.985.092 2.145.196.272.179.95 1.016 1.736 2.142l.665.953.5.052c1.655.17 3.575 1.056 4.602 2.125.667.696.915 1.24.916 2.018 0 .5-.038.671-.25 1.121-.252.537-.316.612-.371.433zm-32.72-3.762c-2.16-1.29-5.375-3.944-8.144-6.725C8.711 14.591 5.006 9.326 2.89 4.35 2.4 3.197 1.962 2.04 2.003 2c.014-.014.148.263.297.616C2.88 4 4.292 6.33 5.603 8.072c1.52 2.021 3.793 4.474 5.863 6.328 3.97 3.555 8.71 6.754 13.858 9.352.842.425 1.53.79 1.53.813 0 .049-4.414 1.89-4.53 1.89-.046 0-.382-.18-.747-.397z"
              fill="#eb1747"
            ></path>
            <path
              d="M22.527 37.24v-6.378l6.671.003 6.672.003-.453.428c-.725.684-.608.669-5.347.669h-4.08v3.306h3.543c2.302 0 3.543.028 3.543.079 0 .156-.57.703-.896.861-.32.155-.468.162-3.262.162H25.99v4.38l-.298.494c-.73 1.207-1.79 2.04-2.949 2.32l-.216.052zM49.612 43.339c-.868-.379-1.659-1.022-2.263-1.843l-.601-.817v-9.76h3.399v6.323c0 3.477-.015 6.317-.034 6.311a23.912 23.912 0 01-.5-.214zm-12.518-6.981v-5.575h3.263v4.487h2.38c1.309 0 2.38.046 2.38.102 0 .056-.23.286-.51.51-.504.403-.536.409-2.38.452l-1.87.045v5.554h-3.263z"
              fill="#f5f5f5"
            ></path>
          </svg>
        ),
      },
      links: {
        weekepedia: selectUncomingLaunches.docs[0]?.links?.wikipedia || "",
        youtube: selectUncomingLaunches.docs[0]?.links?.webcast || "",
        redit: selectUncomingLaunches.docs[0]?.links?.reddit?.campaign || "",
      },
      additionalData: {
        title: "LAUNCHPAD",
        desc: selectUncomingLaunches.docs[0]?.launchpad?.name || "",
        comp: (
          <h2 className=" text-base text-white font-semibold">
            {selectUncomingLaunches.docs[0]?.launchpad?.name || ""}
          </h2>
        ),
      },
    };
  }, [selectUncomingLaunches]);


  const previousData = useMemo(() => {
    return {
      data: [
        {
          title: "MISSION NAME",
          desc: selecrPreviousLaunches.docs[0]?.name || "",
        },

        {
          title: "ROCKET",
          desc: selecrPreviousLaunches.docs[0]?.rocket?.name || "",
        },

        {
          title: "FLIGHT NUMBER",
          desc: selecrPreviousLaunches.docs[0]?.flight_number || "",
        },
        {
          title: "TIME (UTC)",
          desc:
            `${new Date(selectUncomingLaunches.docs[0]?.date_utc).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })} ${new Date(selectUncomingLaunches.docs[0]?.date_utc).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            }`
        },
        // "LINKS",
      ],
      logo: {
        title: "ROCKET LOGO",
        desc: selecrPreviousLaunches.docs[0]?.rocket?.name,
        image: selecrPreviousLaunches.docs[0]?.links?.patch?.small,
        svg: "",
      },
      links: {
        weekepedia: selecrPreviousLaunches.docs[0]?.links?.wikipedia || "",
        youtube: selecrPreviousLaunches.docs[0]?.links?.webcast || "",
        redit: selecrPreviousLaunches.docs[0]?.links?.reddit?.campaign || "",
      },
      additionalData: {
        title: "CREW",
        desc: selecrPreviousLaunches.docs[0]?.crew?.length || "",
        comp: (
          <div className=" flex gap-1 ">
            {selecrPreviousLaunches.docs[0]?.crew?.map((item, index) => (
              <BsPersonFill className=" text-white" />
            ))}
          </div>
        ),
      },
    };
  }, [selecrPreviousLaunches.docs, selectUncomingLaunches.docs]);
  const launchSites = [
    {
      name: "Cape Canaveral",
      location: "LC-39A & SLC-40",
      leftLabel: "Region",
      region: "Florida",

      url: "https://live.staticflickr.com/65535/51134975562_11a63a62d7_h.jpg",
      weather: [
        {
          label: "Temp",
          value: "26°C",
        },
        {
          label: "Weather",
          value: "Clear",
        },
        {
          label: "Wind",
          value: "0 m/s",
        },
      ],
    },
    {
      name: "Starbase Boca Chica",
      location: "Starship Launch Facility",
      leftLabel: "Region",
      region: "Texas",
      url: "https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg",
      weather: [
        {
          label: "Temp",
          value: "24°C",
        },
        {
          label: "Weather",
          value: "Clear",
        },
        {
          label: "Wind",
          value: "0 m/s",
        },
      ],
    },
    {
      name: "Vandenberg Base",
      location: "USSF SLC-4E",
      leftLabel: "Region",
      region: "California",
      url: "https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg",
      weather: [
        {
          label: "Temp",
          value: "24°C",
        },
        {
          label: "Weather",
          value: "Clear",
        },
        {
          label: "Wind",
          value: "0 m/s",
        },
      ],
    },
  ];

  return (
    <>
      <div className=" flex  flex-col lg:flex-row gap-4">
        <div className=" w-full lg:w-1/2 flex flex-col lg:items-end  items-center">
          {[uncomingData, previousData].map((item, index) => (
            <ArticleCard title="Uncoming Launches">
              <div className=" grid grid-cols-2">
                <div>
                  {item.data.map((item, index) => (
                    <div key={index} className=" leading-3">
                      <LightHeading title={item.title} />
                      <BoldHeading title={item.desc} />
                    </div>
                  ))}
                </div>
                <div className=" flex flex-col gap-1">
                  <LightHeading title={item.logo.title} />
                  <div
                    style={{
                      background: "rgba(51, 51, 51, 0.5)",
                    }}
                    className=" rounded-md h-32 w-32 relative flex justify-center items-center flex-col"
                  >
                    {item.logo.image ? (
                      <img
                        src={item.logo.image}
                        alt="rocket"
                        className=" h-24  object-contain"
                      />
                    ) : (
                      item.logo.svg
                    )}
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2">
                <div>
                  <LightHeading title="LINKS" />
                  <div className=" flex gap-2">
                    <a
                      style={{
                        background: uncomingData?.links?.weekepedia
                          ? "white"
                          : "rgba(255, 255, 255, 0.5)",
                      }}
                      className={` p-1 rounded-full ${uncomingData.links.weekepedia ? "hover:bg-[#f5f5f5]" : "cursor-not-allowed opacity-55"}`}
                      href={uncomingData.links.weekepedia}
                    >
                      <FaWikipediaW />
                    </a>
                    <a
                      style={{
                        background: uncomingData?.links?.youtube
                          ? "white"
                          : "rgba(255, 255, 255, 0.5)",
                      }}
                      className={`bg-white p-1 rounded-full ${uncomingData.links.youtube ? "hover:bg-[#f5f5f5]" : "cursor-not-allowed opacity-55"}`}
                      href={uncomingData.links.youtube}
                    >
                      <FaYoutube />
                    </a>
                    <a
                      style={{
                        background: uncomingData?.links?.redit
                          ? "white"
                          : "rgba(255, 255, 255, 0.5)",
                      }}
                      className={`bg-white p-1 rounded-full ${uncomingData.links.redit ? "hover:bg-[#f5f5f5]" : "cursor-not-allowed opacity-55"}`}
                      href={uncomingData.links.redit}
                    >
                      <FaRedditAlien />
                    </a>
                  </div>
                </div>
                <div>
                  <LightHeading title={item.additionalData.title} />

                  {item.additionalData.comp}
                </div>
              </div>
            </ArticleCard>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center ">

          <ArticleCard title="Launch Sites">
            <div className=" flex flex-col gap-5 rounded-2xl w-full ">
              {launchSites.map((item, index) => (
                <div
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                  }}
                  key={index}
                  className=" py-2 px-4 relative overflow-hidden w-full bg-blue-gray-600 shadow-blue-gray-500/50 text-white shadow-lg bg-clip-border rounded-xl "
                >

                  <div className=" flex w-full justify-between items-center">
                    <div>
                      <BoldHeading title={item.name} />
                      <LightHeading title={item.location} />
                    </div>
                    <div>
                      <LightHeading title={item.leftLabel} />
                      <BoldHeading title={item.region} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {item.weather.map((x, index) => (
                      <div >
                        <LightHeading title={x.label} />
                        <BoldHeading title={x.value} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ArticleCard>
          <ArticleCard title="Starlink">
            <div className=" flex justify-center items-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 714 714"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M180.612 492.891L219.292 465.505L208.912 450.846L170.233 478.232C162.847 474.835 154.1 476.822 148.907 483.077C143.715 489.332 143.37 498.295 148.067 504.93C152.765 511.564 161.334 514.218 168.959 511.397C176.584 508.576 181.364 500.986 180.612 492.891V492.891Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M485.25 530.297L500.82 552.287C503.686 556.335 509.291 557.293 513.339 554.427L535.328 538.858L514.57 509.539L485.251 530.298L485.25 530.297Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M311.262 191.307L290.504 161.988L319.823 141.23L340.581 170.549L311.262 191.307Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M342.4 235.286L321.641 205.967L350.961 185.208L371.719 214.527L342.4 235.286Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M549.988 528.479L529.229 499.16L558.548 478.401L579.307 507.72L549.988 528.479Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M325.334 71.3024L303.345 86.8714L324.103 116.19L353.423 95.4318L337.854 73.4425C334.987 69.394 329.382 68.4365 325.334 71.3024V71.3024Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M267.284 222.445L246.525 193.126L275.844 172.368L296.603 201.687L267.284 222.445Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M531.691 409.382L510.932 380.063L540.251 359.305L561.01 388.624L531.691 409.382Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M487.711 440.521L466.953 411.202L496.272 390.443L517.03 419.762L487.711 440.521Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M443.733 471.659L422.974 442.34L452.293 421.581L473.052 450.9L443.733 471.659Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M569.199 275.853L593.517 268.485C596.28 267.646 598.471 265.531 599.406 262.8C600.342 260.068 599.908 257.054 598.238 254.698L533.626 163.442C531.959 161.086 529.26 159.674 526.373 159.649C523.486 159.624 520.763 160.988 519.055 163.315L504.026 183.805L569.199 275.853Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M518.849 484.499L498.091 455.18L527.41 434.422L548.168 463.741L518.849 484.499Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M562.829 453.361L542.07 424.042L571.389 403.283L592.148 432.602L562.829 453.361Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M474.871 515.637L454.112 486.318L483.431 465.56L504.19 494.879L474.871 515.637Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M298.421 266.424L277.663 237.105L306.982 216.346L327.741 245.665L298.421 266.424Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M355.241 160.169L334.483 130.85L363.802 110.091L384.56 139.41L355.241 160.169Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M280.124 147.329L259.366 118.01L288.685 97.2512L309.443 126.57L280.124 147.329Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M618.097 469.252L602.528 447.263L573.208 468.021L593.967 497.34L615.956 481.771C620.004 478.905 620.962 473.3 618.097 469.252V469.252Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M386.379 204.148L365.621 174.829L394.94 154.07L415.698 183.389L386.379 204.148Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M222.717 143.958C218.669 146.824 217.711 152.43 220.577 156.478L236.146 178.467L265.465 157.708L244.706 128.389L222.717 143.958Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M455.397 177.291L279.482 301.843C271.386 307.575 269.47 318.785 275.202 326.882L358.237 444.159C363.969 452.255 375.18 454.171 383.276 448.439L559.191 323.887C567.287 318.154 569.204 306.944 563.471 298.848L480.436 181.571C474.704 173.474 463.494 171.558 455.397 177.291ZM481.346 213.939L533.242 287.237C541.84 299.381 538.966 316.197 526.822 324.795L402.215 413.02C390.071 421.618 373.255 418.744 364.657 406.6L312.76 333.301C304.162 321.157 307.036 304.341 319.18 295.743L443.787 207.518C455.932 198.92 472.747 201.795 481.346 213.939V213.939Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <path
                  d="M302.06 395.899C275.129 357.374 224.655 343.368 181.724 362.507C179.269 363.624 177.438 365.775 176.728 368.377C176.018 370.979 176.503 373.761 178.05 375.97L279.563 519.548C281.13 521.747 283.594 523.133 286.286 523.329C288.979 523.525 291.619 522.511 293.486 520.562C325.87 486.441 329.467 434.133 302.06 395.899Z"
                  fill="rgba(255,255,255,0.4)"
                ></path>
                <rect
                  x="385.276"
                  y="402.561"
                  width="107.77"
                  height="170.64"
                  rx="14"
                  transform="rotate(-125.3 385.276 402.561)"
                  fill="rgba(255,255,255,0.4)"
                ></rect>
                <path
                  className="blinking-light"
                  d="M434.234 323.492C426.18 329.194 415.028 327.288 409.325 319.234V319.234C403.623 311.18 405.529 300.028 413.583 294.325V294.325C421.637 288.623 432.789 290.529 438.492 298.583V298.583C444.194 306.637 442.288 317.789 434.234 323.492V323.492Z"
                  fill="#00EC09"
                ></path>
              </svg>
            </div>

            <h2 className="  text-center text-base text-white font-semibold">
              There are currently 3268 active Starlink satellites on the low Earth
              orbit.
            </h2>
          </ArticleCard>

        </div>
      </div>
    </>
  );
}
