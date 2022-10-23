// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

let data = `<div class="section">
      <div class="inner">
        <div class="blog-post">
           <p>Since taking over <a href="https://www.footballticketpad.com/group/club/liverpool">Liverpool Football Club</a> in October 2015, the reds have been able to reach new heights with Jurgen Klopp in comparison to the early ’10s. This is due to the smart business decisions by Fenway Sports Group (commonly known as FSG) as well as the German manager’s ability to get the most out of his players.</p>

<p>The clubs’ trophy cabinet isn’t the only thing that has seen a sizeable shift, however, with an Anfield Stadium development set to take place at the Anfield Road End - finishing by summer next year.</p>

<p>What does the Liverpool development mean for Anfield, however? Below we shed some light on what the Phase 2 development will look like for Liverpool supporters.</p>

<p>&nbsp;</p>

<h2>Main Stand and Superstore:</h2>

<p>Since the acquisition of FSG in October 2010, the new club owner, John W. Henry expressed his desire to expand the capacity of the stadium whilst maintaining the essence of what makes the matchday experience at Liverpool special.</p>

<p>The Liverpool FC ground development officially began in 2015-16 in which FSG desired to expand the main stand which involved adding a new third tier. Not only did they implement 8,500 new seats to the main stand, but they also included new matchday facilities as well as enhanced corporate facilities.</p>

<p>With the first phase of the new Liverpool FC ground expansion finishing for the 2016-17 season, Liverpool was now able to seat 54,742 Anfield faithful. However, FSG’s vision didn’t end there. Following the development of the main stand, they desired to implement a new superstore and matchday experience enhancements.</p>

<p>The purpose of this was to provide locals, as well as those visiting from other locations a richer matchday experience. With each visit provides a true ‘matchday experience’ as opposed to just entering the stadium.</p>

<p>&nbsp;</p>

<h2>Anfield Development:</h2>

<p>Following these initial phases, FSG has now turned their attention to the Anfield Road development phase. This includes increasing the total number of seats by 4,825 which will see the total number be increased to 58,000.</p>

<p>However, since this initial plan in 2014, this number has grown substantially. The Anfield development expansion is set to cost roughly £60 million and will now see an additional 7,000 seats be created. Increasing the capacity up to 61,000 supporters.</p>

<p>Work on the Anfield Road End development began on the 30th of September with Liverpool’s manager, Jurgen Klopp turning the first sod himself. The development is set to be completed for the 2023-24 season.</p>

<p>&nbsp;</p>

<h2>What Does The Liverpool Development Mean For Anfield?</h2>

<p>There has been no better time to be a modern Liverpool Football Club supporter. With a myriad of trophies and are currently trying to achieve the quadruple - a feat that no other English team has been able to achieve. It is no secret that Liverpool supporters are very happy with the direction of their beloved club.</p>

<p>Success on the pitch hasn’t been the only thing, however, as the Liverpool development for <a href="https://www.footballticketpad.com/news/our-guide-to-anfield-the-home-of-liverpool-fc">Anfield Stadium</a> will ultimately mean that it attracts more fans to support their team by visiting this iconic stadium.</p>

<p>Whether you are a season ticket holder or someone who has experienced Anfield for the very first time, these expansions will mean that you have a better chance to take your loved ones and watch an incredible brand of football.</p>

<p>Regardless of if Liverpool can obtain the quadruple, the way FSG has turned this club around into one of the most elite clubs in world football is truly remarkable and will surely become the blueprint for other clubs who wish to invest their money similarly.</p>

        </div>
      </div>
    </div>`



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
