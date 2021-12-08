import { SectionOne, SectionTwo, SectionThree } from "../Sections/index"

export default function useTest(number = 1) {

  switch (number) {
    case 1:
      return SectionOne
    case 2:
      return SectionTwo
    case 3:
      return SectionThree
    default:
      return SectionOne
  }

}
