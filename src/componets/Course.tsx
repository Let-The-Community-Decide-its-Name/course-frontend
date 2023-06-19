import React from "react";
import useSWR  from "swr";

function Course() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error,isLoading } = useSWR("https://course-backend-jkb2.onrender.com/api/courses", fetcher);
  // console.log(data.results);
  // console.log(error.message);

  

  return (
    <div className="ml-10 mr-10 mb-10 flex flex-col gap-6 flex flex-col justify-center items-center">
      <div className="text-white text-[45px] font-light mb-4">
        Popular courses
      </div>
      {
        isLoading && <div className="text-white text-[45px] font-light mb-4">Loading...</div> 
          
        }
          <div  className="max-h-[520px] overflow-y-scroll flex flex-col gap-6 lg:w-[80%] w-full">
        {
          data && (
            data.results.map((course: any) => {
              return (

                
                  <a href={course.url.includes("http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1=") ? course.url.split("http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1=")[1] : course.url} key={course.id} target="_blank">
                    <div className="bg-[#D9D9D9] rounded-xl flex md:flex-row flex-col justify-start items-center px-5 py-5 gap-4 w-full cursor-pointer" >
                <div className="mr-5">
                  <div className="bg-white h-26 w-36">
                    <img src={course.image} alt="" loading="lazy" decoding="async"/>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="text-[28px] bg-white w-full p-2 rounded-md">
                    {course.name}
                  </div>
                  <span className="text-sm bg-blue-300 p-2 rounded-md">
                    Category : {course.category} | Language : {course.language} | Store : {course.store}
                  </span>
                  {course.shoer_description && (
                  <div className="text-[18px] bg-white w-full p-2 rounded-md">
                    {course.shoer_description}
                  </div>
                  )}
                </div>
              </div>
                  </a>
              )
            })
            )
          }
          {
            error && <div className="text-white text-[45px] font-light mb-4">{error.message}</div>
          }
          </div>
    </div>
  );
}

export default Course;
