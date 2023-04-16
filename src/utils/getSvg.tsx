import { SvgItem } from "./types"

// TODO: To do width and height required
export const getSvg = (item: SvgItem) => {
  switch (item.type) {
    case "arrowDownSelect":
      return (
        <svg
          width={item.width ? item.width : "20px"}
          height={item.height ? item.height : "20px"}
          viewBox="0 0 20 20"
          focusable="false"
          fill="currentColor"
        >
          <polygon points="5,8 10,13 15,8"></polygon>
        </svg>
      )
    case "driveEmpty":
      return (
        <svg
          width={item.width ? item.width : "100"}
          height={item.height ? item.height : "75"}
          viewBox="0 0 100 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V14C0 14.1693 0.0105217 14.3362 0.0309469 14.5C0.0105217 14.6638 0 14.8307 0 15V71C0 73.2091 1.79086 75 4 75H96C98.2091 75 100 73.2091 100 71V15C100 12.7909 98.2091 11 96 11H43.0278C43.0256 10.9981 43.0234 10.9962 43.0212 10.9942L31.6323 0.994239C30.9025 0.353396 29.9644 0 28.9931 0H4Z"
            fill="#40A9FF"
          />
        </svg>
      )

    case "arrowToggleSidePanel":
      return (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width={item.width ? item.width : "20px"}
          height={item.height ? item.height : "20px"}
          viewBox="0 0 24 24"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
          fill="#5F6368"
        >
          <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>
          <path fill="none" d="M0,0h24v24H0V0z"></path>
        </svg>
      )
    case "close":
      return (
        <svg
          x="0px"
          y="0px"
          width={item.width ? item.width : "14px"}
          height={item.height ? item.height : "14px"}
          viewBox="0 0 10 10"
          focusable="false"
          fill={item.fill ? item.fill : "currentColor"}
        >
          <polygon points="10,1.01 8.99,0 5,3.99 1.01,0 0,1.01 3.99,5 0,8.99 1.01,10 5,6.01 8.99,10 10,8.99 6.01,5 "></polygon>
        </svg>
      )
    case "cloud":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill="#1F1F1F"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path>
        </svg>
      )
    case "computers":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="currentColor"
          focusable="false"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
        </svg>
      )
    case "getLink":
      return (
        <svg
          x="0px"
          y="0px"
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M3.9,12c0-1.7,1.4-3.1,3.1-3.1h4V7H7c-2.8,0-5,2.2-5,5s2.2,5,5,5h4v-1.9H7C5.3,15.1,3.9,13.7,3.9,12z M8,13h8v-2H8V13zM17,7h-4v1.9h4c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1h-4V17h4c2.8,0,5-2.2,5-5S19.8,7,17,7z"></path>
        </svg>
      )
    case "googleApps":
      return (
        <svg focusable="false" viewBox="0 0 24 24" fill={item.fill}>
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
      )
    case "listLayout":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"></path>
        </svg>
      )
    case "menuSquared":
      return (
        <svg
          fill={item.fill}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
      )
    case "modified":
      return (
        <svg
          width={item.width ? item.width : "18px"}
          height={item.height ? item.height : "18px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M12.95 21.0Q11.25 21.0 9.6375 20.3625Q8.025 19.725 6.7 18.4L8.1 17.0Q9.125 17.975 10.4 18.4875Q11.675 19.0 13.0 19.0Q15.9 19.0 17.95 16.95Q20.0 14.9 20.0 12.0Q20.0 9.1 17.95 7.05Q15.9 5.0 13.0 5.0Q10.125 5.0 8.0625 7.0125Q6.0 9.025 6.0 12.2L7.85 10.35L9.25 11.75L5.0 16.0L0.75 11.75L2.2 10.35L4.0 12.2Q4.0 10.25 4.7 8.5625Q5.4 6.875 6.625 5.6375Q7.85 4.4 9.4875 3.7Q11.125 3.0 13.0 3.0Q14.85 3.0 16.4875 3.7125Q18.125 4.425 19.35 5.65Q20.575 6.875 21.2875 8.5125Q22.0 10.15 22.0 12.0Q22.0 13.85 21.2875 15.4875Q20.575 17.125 19.35 18.35Q18.125 19.575 16.475 20.2875Q14.825 21.0 12.95 21.0ZM15.8 16.2 12.0 12.4V7.0H14.0V11.6L17.2 14.8Z"></path>
        </svg>
      )
    case "moreOptions":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      )

    case "myDrive":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill ? item.fill : "currentColor"}
          focusable="false"
        >
          <path d="M19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM19 20H5V19H19V20ZM19 17H5V4H19V17Z"></path>
          <path d="M13.1215 6H10.8785C10.5514 6 10.271 6.18692 10.0841 6.46729L7.14019 11.6075C7 11.8878 7 12.215 7.14019 12.4953L8.26168 14.4579C8.40187 14.7383 8.72897 14.9252 9.05608 14.9252H15.0374C15.3645 14.9252 15.6449 14.7383 15.8318 14.4579L16.9533 12.4953C17.0935 12.215 17.0935 11.8878 16.9533 11.6075L13.9159 6.46729C13.7757 6.18692 13.4486 6 13.1215 6ZM10.1776 12.0748L12.0467 8.8972L13.8692 12.0748H10.1776Z"></path>
        </svg>
      )
    case "myDriveMini":
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width={item.width ? item.width : "14px"}
          height={item.height ? item.height : "14px"}
          viewBox="0 0 14 14"
          enableBackground="new 0 0 14 14"
          xmlSpace="preserve"
          fill={item.fill}
        >
          {" "}
          <image
            id="image0"
            width="14"
            height="14"
            x="0"
            y="0"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOEAAAAABqs65OAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0T//xSrMc0AAAAJcEhZ
cwAAAGAAAABgAPBrQs8AAAAHdElNRQfmDA4AFzAKvHw3AAABfElEQVQY003QfyjccRzH8efnc9++
xjmu/KPLf+JoLXdFlv0xf9CUv+iK/CgrVvvDRm0ToezUUso/krZ/hr/Et/hDipIoyvbPJv7Qtr/E
tlpud+G+57739sed8vr30eufpxIbM3njBPGiSE+IuL4bmoQSOZsa1ocl6gvuDF5K8FHxeMz32ICj
ns3BEe3+pfZd/WhnSqovveGTtve+qAanzPOyI9k+Vzdx7j+P1nW1z3U4noZkLiCyHioPRrZSM4Pf
AAYsZztyWB5YD4kYAGTp/IPx+aJKy0x8rmjsDbwjB0AD0BIPz2786+su6VmMWdPm1SdeAKSfpjQ7
NfHo2KjaulpJWNJJ0x3aFLjr+//IZCzAXs6bVy7PBxR2Ggds//FSXsvQa0b5yowuOF61n1IIBujd
U3+rpeP8BlJ8pDC1dvpM7/DEAP3TW9v09kEjy5lCoXjewnNdCUrkbHlk++ivuiA7g9eS+7ArXOXz
KbExnaxkKfn3wv83friuSdwCi/GMebae4UwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMTRU
MDA6MjM6NDgrMDA6MDBkdldeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTE0VDAwOjIzOjQ4
KzAwOjAwFSvv4gAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0xMi0xNFQwMDoyMzo0OCswMDow
MEI+zj0AAAAASUVORK5CYII="
          />
        </svg>
      )

    case "new":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
        </svg>
      )
    case "preview":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M12 7c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7.2c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7c0 1.49-1.21 2.7-2.7 2.7z"></path>
          <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13a9.77 9.77 0 0 1-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17z"></path>
        </svg>
      )
    case "recent":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill}
          focusable="false"
        >
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
        </svg>
      )
    case "searchGoogleDrive":
      return (
        <svg
          focusable="false"
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={item.fill}
        >
          <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
          <path d="M0,0h24v24H0V0z" fill="none"></path>
        </svg>
      )
    case "settings":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill}
          focusable="false"
        >
          <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
          <circle cx="12" cy="12" r="3.5"></circle>
        </svg>
      )
    case "share":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
        </svg>
      )
    case "sharedWithMe":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="#000000"
          focusable="false"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"
          ></path>
        </svg>
      )
    case "showSearchIcon":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill}
        >
          <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
        </svg>
      )
    case "starred":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill="currentColor"
        >
          <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
        </svg>
      )
    case "support":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill}
          focusable="false"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
        </svg>
      )
    case "toggleDetails":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill}
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
        </svg>
      )
    case "trash":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill={item.fill}
          focusable="false"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
          <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
        </svg>
      )
    case "warning":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          fill={item.fill}
          className="text-red-500"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
        </svg>
      )
    case "arrowLeftSelect":
      return (
        <svg
          width={item.width ? item.width : "20px"}
          height={item.height ? item.height : "20px"}
          viewBox="0 0 20 20"
          focusable="false"
          fill="currentColor"
        >
          <polygon points="8,5 13,10 8,15"></polygon>
        </svg>
      )

    case "myDriveSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="#000000"
          focusable="false"
        >
          <path d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z"></path>
        </svg>
      )

    case "sharedWithMeSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="#000000"
          focusable="false"
        >
          <g>
            <rect fill="none" height="24" width="24"></rect>
          </g>
          <g>
            <g>
              <path d="M15,8c0-1.42-0.5-2.73-1.33-3.76C14.09,4.1,14.53,4,15,4c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.43,0-0.84-0.09-1.23-0.21 c-0.03-0.01-0.06-0.02-0.1-0.03C14.5,10.73,15,9.42,15,8z M16.66,13.13C18.03,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.42,13.53,16.66,13.13z M9,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S6.79,4,9,4z M9,13c2.67,0,8,1.34,8,4v3H1v-3 C1,14.34,6.33,13,9,13z"></path>
            </g>
          </g>
        </svg>
      )

    case "recentSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="#000000"
          focusable="false"
        >
          <g>
            <rect fill="none" height="24" width="24"></rect>
          </g>
          <g>
            <path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59l3.71,3.71L15.29,16.71z"></path>
          </g>
        </svg>
      )

    case "starredSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      )

    case "trashSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          fill="#000000"
          focusable="false"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </g>
          <g>
            <path d="M15,4V3H9v1H4v2h1v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6h1V4H15z M11,17H9V8h2V17z M15,17h-2V8h2V17z"></path>
          </g>
        </svg>
      )

    case "cloudSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill="#000000"
        >
          <g>
            <rect fill="none" height="24" width="24"></rect>
          </g>
          <g>
            <path d="M19,11c0-3.87-3.13-7-7-7C8.78,4,6.07,6.18,5.26,9.15C2.82,9.71,1,11.89,1,14.5C1,17.54,3.46,20,6.5,20 c1.76,0,10.25,0,12,0l0,0c2.49-0.01,4.5-2.03,4.5-4.52C23,13.15,21.25,11.26,19,11z"></path>
          </g>
        </svg>
      )

    case "warningSelected":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
        </svg>
      )

    case "checkboxIndeterminate":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
          <path d="M7 11h10v2H7z"></path>
        </svg>
      )

    case "checkboxChecked":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
        >
          <g>
            <g>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </g>
          </g>
          <g>
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10.59,16.24L6.34,12l1.41-1.41 l2.83,2.83l5.66-5.66l1.41,1.41L10.59,16.24z"></path>
          </g>
        </svg>
      )

    case "folder":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 22 16"
          fill={item.fill ? item.fill : "currentColor"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.07283 0.49712C6.70791 0.176698 6.23886 0 5.75323 0H2C0.89543 0 0 0.895431 0 2V2.34668V3.84V14C0 15.1046 0.895433 16 2 16H19.3333C20.4379 16 21.3333 15.1046 21.3333 14V4.34668C21.3333 3.24211 20.4379 2.34668 19.3333 2.34668H9.93271C9.44708 2.34668 8.97803 2.16998 8.61311 1.84956L7.07283 0.49712Z"
            fill="#5f6368"
          />
        </svg>
      )

    case "greatherThanFolder":
      return (
        <svg
          width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"}
          viewBox="0 0 24 24"
          focusable="false"
          fill={item.fill ? item.fill : "currentColor"}
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      )


      case "checkboxFileFolder":
      return (
       <svg    width={item.width ? item.width : "24px"}
          height={item.height ? item.height : "24px"} viewBox="0 0 24 24" focusable="false"  ><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
      )


      
  }
}

/* export const svgTest = {
    arrowLeft: () => {
        return <div>holaxd</div>;
    },
}; */

/* {
    arrowLeft: () => {
        return <div>holaxd</div>;
    };
} */
