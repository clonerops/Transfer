import React, { FC, useContext, useEffect, useState } from 'react'
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query'

interface IProps {
    captcha: string
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

const Captcha:FC<IProps> = ({captcha, refetch}) => {
    const [captchaValue, setCaptchaValue] = useState<string>("")

    useEffect(() => {
        const getCaptchaIsOnMount = async () => {
            setCaptchaValue("data:image/jpeg;base64," + captcha)
        }
        getCaptchaIsOnMount()
        // eslint-disable-next-line
    }, [captcha])

    // const getCaptcha = async () => {
    //     try {
    //         const res = await recpatchaImageUser()
    //         setCaptcha("data:image/jpeg;base64," + res?.image)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // if (isLoading) return <div>Loading...</div> 

    return (
        <>
            <div className="recaptcha">
                <div className='recaptcha__content'>
                    <img
                        id="imgCaptcha"
                        className=""
                        alt=""
                        src={captchaValue}
                        style={{ height: 46, width: 150 }}
                        onClick={() => refetch}
                    />
                </div>
            </div>
        </>
    )
}

export default Captcha