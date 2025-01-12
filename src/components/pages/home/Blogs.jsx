import Image from "next/image";
import blog_one from "../../../../public/images/blog_one.png";
import blog_two from "../../../../public/images/blog_two.png";
import blog_three from "../../../../public/images/blog_three.png";
import Caption from "@/components/common/heading/Caption";
import Title from "@/components/common/heading/Title";
import Description from "@/components/common/heading/Description";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const blogPosts = [
  {
    id: 1,
    image: blog_one,
    date: "May 23, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    link: "#",
  },
  {
    id: 2,
    image: blog_two,
    date: "May 23, 2024",
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    link: "#",
  },
  {
    id: 3,
    image: blog_three,
    date: "May 23, 2024",
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <div className="px-4 py-20 lg:py-[130px] max-w-[1200px] mx-auto">
      <div className="flex items-center justify-center flex-col pb-5 lg:pb-10">
        <Caption className="mb-3 sm:mb-4">Our Blog</Caption>
        <Title className="mb-3 text-center lg:text-left">
          Fresh Harvest Blog
        </Title>
        <Description className="mb-4 text-center">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </Description>
      </div>

      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="rounded-[20px] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={384}
              height={260}
              className="object-cover"
            />
            <div className="pt-6">
              <p className="text-secondary font-questrial text-lg">
                {post.date}
              </p>
              <h2 className="text-lg font-medium text-primary pb-4 pt-2 max-w-[384px]">
                {post.title}
              </h2>
              <Link
                href={post.link}
                className="text-lg font-semibold text-orange flex items-center gap-x-2"
              >
                <span className="hover:underline">Read More</span>{" "}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
