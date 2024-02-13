import { Button } from "@/components/Button";
import { ButtonLearnMore } from "@/components/ButtonLearnMore";
import { AnimatedBackgroundLogo } from "@/components/home/AnimatedBackgroundLogo";
import { Card } from "@/components/home/Card";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  
  return (
    <div className="mt-5 lg:mt-10 mb-10">
      <div className="relative flex justify-between gap-5 max-lg:grid-cols-1">
        <section className="lg:w-3/6">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-5 duration-200">
            {t('title.one')}<br className="max-xl:hidden" />
            {t('title.two')}<br className="max-xl:hidden" />
            {t('title.three')}<br className="max-xl:hidden" />
            <span className="text-[#F2A93B]">{t('title.four')}</span>
          </h1>
          <p className="font-normal text-lg mb-8">
            {t('description')}
          </p>
          <div className="flex items-center sm:gap-12 max-sm:flex-col gap-5 ">
            <Link href={'#'}>
              <Button label={t('buttons.exploreNow')} className={'duration-100 hover:bg-[#F2A93B]/80'} />
            </Link>
            <Link href={'#'}>
              <ButtonLearnMore label={t('buttons.learnMore')}/>
            </Link>
          </div>
          <div className="mt-16">
            <Card />
          </div>
        </section>
        <section className="max-lg:absolute right-0 -z-10 max-lg:opacity-60">
          <AnimatedBackgroundLogo />
        </section>
      </div>
    </div>
  )
}