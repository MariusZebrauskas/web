import { Danger } from "../../components/Danger"

const Blog = (props) => {
	const {data} = props;
    return (
    		<div>
    			<Danger data={data}/>
    		</div>
    	)

}


export default Blog


// http://localhost:3000/api/slug


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/slug')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}


export async function getStaticPaths() {
    return {
        paths: [
            {  params: { blogid: '1', id:"1" } },
            {  params: { blogid: '2', id:"2"} },
            {  params: { blogid: '3', id:"3" } },
        ],
        fallback: false
    }
}