import ImageComponent from '@/components/ui/image-component'
import { CardSubTitle, Title } from '@/components/ui/title'
import hero from "@/assets/image/hero/heroSection.svg";
import img1 from "@/assets/image/courses/Image-1.png"


import { Button } from '@/components/ui/button';


export default function CoursesPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-8  ">
                <div className='order-2 w-[80%] flex flex-col gap-10 items-start justify-center '>
                    <div className='flex flex-col  gap-4 items-start justify-center w-full'>
                        <Title title="Ingliz tili" />
                        <CardSubTitle titleClass='line-clamp-3 ' title="New Bridge & Brighton oquv markazlari yordamida ingliz tilini o'rganing" />
                    </div>
                    <div className='w-[40%] flex items-center justify-center'>
                        <Button className="w-full">Batafsil</Button>
                    </div>
                </div>
                <div className="order-1">
                    <ImageComponent image={img1} imageClass="xs:w-[500px] md:w-[600px]" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8  ">
                <div className='order-2 w-[80%] flex flex-col gap-10 items-start justify-center '>
                    <div className='flex flex-col  gap-4 items-start justify-center w-full'>
                        <Title title="Rus tili" />
                        <CardSubTitle titleClass='line-clamp-3 ' title="New Bridge & Brighton oquv markazlari yordamida rus tilini o'rganing" />
                    </div>
                    <div className='w-[40%] flex items-center justify-center'>
                        <Button className="w-full">Batafsil</Button>
                    </div>
                </div>
                <div className="order-1">
                    <ImageComponent image={img1} imageClass="xs:w-[500px] md:w-[600px]" />
                </div>
            </div>
        </div>
    )
}
