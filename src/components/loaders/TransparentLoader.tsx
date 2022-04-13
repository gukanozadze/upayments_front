import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useSpring, animated } from 'react-spring'

const TransparentLoader = ({ loading }: { loading: boolean }) => {
	const styles = useSpring({
		opacity: loading ? 1 : 0,
	})

	return (
		<animated.div
			className='z-10 backdrop-blur-lg absolute left-0 top-0 w-full h-full flex justify-center items-center pointer-events-none'
			style={styles}
		>
			<ClipLoader color={'#4C4CDC'} loading={loading} size={100} />
		</animated.div>
	)
}

export default TransparentLoader
