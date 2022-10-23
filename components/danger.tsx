export const Danger = ({data}) => {
	return (
		<div style={{
			padding:"2rem"
		}}>
			  <div dangerouslySetInnerHTML={{__html: data}}></div>
		</div>
	)
}