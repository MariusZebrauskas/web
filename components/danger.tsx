export const Danger = ({data}) => {
	return (
		<div style={{
			padding:"2rem"
		}}>
		<h1>test</h1>
			  <div dangerouslySetInnerHTML={{__html: data}}></div>
		</div>
	)
}