'use client'
import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import { m } from "framer-motion";
import CustomLazy from "@/components/CustomLazy";

const Communities = () => {
  const events = [
    {
      img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: 'www.google.com',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/be2f/93df/88ce0217e66dbc6948f5ee9304249da3?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q9E-VY9nDvEbv~GeZ7dLGl1Di6jANfDtVYG-rBtkWASt2996bnC~sb~jEHzoeWhii~GuSRbQbr9LWuweD9h6NSGijee0uVA8SUmY5G7TKUXBtJtygQxV6glBosAy0Bs4yK0Ckw6~TT8bPFlq0LfwbIr3QJnCmk4J3zzlfz76Cx1Byqu9G2J1s666~nuwZO-tVK0b0XZQXTi7VreHyfW14tXTHH1GqKp5OVmM8a2zZBb-fJZq7XTtunPpSNHz8hVghXenFSM10A5R72oUcZz6wVoyGVvi3HKAHlAIn6p125XeiyyMnItop66DVSkG~qmyTK2z7AmMjDxB90PeY36Qww__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/be2f/93df/88ce0217e66dbc6948f5ee9304249da3?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q9E-VY9nDvEbv~GeZ7dLGl1Di6jANfDtVYG-rBtkWASt2996bnC~sb~jEHzoeWhii~GuSRbQbr9LWuweD9h6NSGijee0uVA8SUmY5G7TKUXBtJtygQxV6glBosAy0Bs4yK0Ckw6~TT8bPFlq0LfwbIr3QJnCmk4J3zzlfz76Cx1Byqu9G2J1s666~nuwZO-tVK0b0XZQXTi7VreHyfW14tXTHH1GqKp5OVmM8a2zZBb-fJZq7XTtunPpSNHz8hVghXenFSM10A5R72oUcZz6wVoyGVvi3HKAHlAIn6p125XeiyyMnItop66DVSkG~qmyTK2z7AmMjDxB90PeY36Qww__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fca0/90fd/5ab14c2952e413418ba047e9f8db48c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlCJNBVzNfZo3iSqRtLelARQl7ncaMEhb4jWv5gZ0wE0ECWVihTpigWoEznm7oa0FbwC-CFF6ZDLYRebsWOQAVa5twRNWEm7JXQN6Kq4K7kAuvGFb4s4I9fa2I4ppavTDwM4h3tkw7xnXHQQpk5GR~2k-mFP5Zb2SlbE7haU~lEefjPHybb7dhAfbtdCh8C3Cik5-yqxjm5FZ2bOlmVYVqnfVsKBc1fYrY0RojPymOO7jlYCWv9vzH3FrPRmHe8fbvb2G35yVKKrawK07KcIUHfvCLUDVxlgBGYv0adlTqjCFYnXi7~ALcxPmQKi6hiyIWpL1vVSMeYc10zMR~N4Fg__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9ca5/9745/fc270d37ee63be203dd5163cdef8c090?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZbzsB~XBtlry4OdQjKbDpU3qlhc3qq~5OzJ8KoATdKg~Q09hzb90VIa5KqFZdSZ6iat~Nf8ktnSB489HW6IFQgtU9iIOjUPh7B52JG0HC7igSkaR0oI~xO0jPp4E9VgyD5fvoo53P7sKjegTIeQ7WX-ngMDndLsTKsBLwKUPaP6t2SSSIMyImuEDKZLpv~n2kBPIK9VJKaMlDF50Spfv36xixjizgQCbEEsxiU6QM2nlrrVkK5qhkBAWGIYhvNYaxNvf0Naku-y48ssFIz~7LDk-8-DNUSB28D6xUdMOleCFAJPughF98F7P74rZXwNi~81B8Y0wGSE5jnbfu3-WQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/be2f/93df/88ce0217e66dbc6948f5ee9304249da3?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q9E-VY9nDvEbv~GeZ7dLGl1Di6jANfDtVYG-rBtkWASt2996bnC~sb~jEHzoeWhii~GuSRbQbr9LWuweD9h6NSGijee0uVA8SUmY5G7TKUXBtJtygQxV6glBosAy0Bs4yK0Ckw6~TT8bPFlq0LfwbIr3QJnCmk4J3zzlfz76Cx1Byqu9G2J1s666~nuwZO-tVK0b0XZQXTi7VreHyfW14tXTHH1GqKp5OVmM8a2zZBb-fJZq7XTtunPpSNHz8hVghXenFSM10A5R72oUcZz6wVoyGVvi3HKAHlAIn6p125XeiyyMnItop66DVSkG~qmyTK2z7AmMjDxB90PeY36Qww__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fca0/90fd/5ab14c2952e413418ba047e9f8db48c9?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlCJNBVzNfZo3iSqRtLelARQl7ncaMEhb4jWv5gZ0wE0ECWVihTpigWoEznm7oa0FbwC-CFF6ZDLYRebsWOQAVa5twRNWEm7JXQN6Kq4K7kAuvGFb4s4I9fa2I4ppavTDwM4h3tkw7xnXHQQpk5GR~2k-mFP5Zb2SlbE7haU~lEefjPHybb7dhAfbtdCh8C3Cik5-yqxjm5FZ2bOlmVYVqnfVsKBc1fYrY0RojPymOO7jlYCWv9vzH3FrPRmHe8fbvb2G35yVKKrawK07KcIUHfvCLUDVxlgBGYv0adlTqjCFYnXi7~ALcxPmQKi6hiyIWpL1vVSMeYc10zMR~N4Fg__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9ca5/9745/fc270d37ee63be203dd5163cdef8c090?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZbzsB~XBtlry4OdQjKbDpU3qlhc3qq~5OzJ8KoATdKg~Q09hzb90VIa5KqFZdSZ6iat~Nf8ktnSB489HW6IFQgtU9iIOjUPh7B52JG0HC7igSkaR0oI~xO0jPp4E9VgyD5fvoo53P7sKjegTIeQ7WX-ngMDndLsTKsBLwKUPaP6t2SSSIMyImuEDKZLpv~n2kBPIK9VJKaMlDF50Spfv36xixjizgQCbEEsxiU6QM2nlrrVkK5qhkBAWGIYhvNYaxNvf0Naku-y48ssFIz~7LDk-8-DNUSB28D6xUdMOleCFAJPughF98F7P74rZXwNi~81B8Y0wGSE5jnbfu3-WQ__",
      title: "TTN Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project",
      date: "27 March 2023",
      joinLink: "communities/joins",
      query: {
        img: "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__",
        intro:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took",
        howToJoin: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat quaerat fugiat? Laborum soluta molestias voluptates odio modi, iure, officiis obcaecati officia ipsam doloremque earum doloribus quasi quis nesciunt animi.',
        timeLines: [
          '27 March 2023: Open application',
          '02 May 2023: Deadline of the 300-word proposal submission',
          '13 June 2023: Submission of first paper draft',
          '13 July 2023: Final papers',
          'September 2023: Publication'
        ],
        applyLink: '#',
        noted: `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`
      },
    },
  ];

  return (
    <CustomLazy>
      <m.div className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-center font-bold text-3xl">
          Community
        </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
            {events.map((event, index) => (
              <SmallEvenCard key={index} data={event} />
            ))}
          </div>
      </m.div>
    </CustomLazy>
  );
};

export default Communities;
