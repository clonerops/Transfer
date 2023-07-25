// import {useIntl} from 'react-intl'
import { MenuItem } from "./MenuItem";
// import {MenuInnerWithSub} from './MenuInnerWithSub'
// import {MegaMenu} from './MegaMenu'
import moment from "moment-jalaali";
import Button from "../../../../../app/modules/billlandingManagment/components/Button";

export function MenuInner() {
    // const intl = useIntl()
    return (
        <>

            {/* <div className="flex items-center justify-center gap-1">
                <div>
                    <span className="font-Yekan text-lg">
                        <span className="">
                            {moment().format("jYYYY/jM/jD")}
                        </span>
                    </span>
                </div>
                <div>
                    <span className="font-Yekan text-lg">
                        ساعت:{" "}
                        <span className="">
                            {moment().locale("fa").format("HH:mm")}
                        </span>
                    </span>
                </div>
            </div> */}

            <MenuItem title="داشبورد" to="/dashboard" />
            {/* <MenuItem title='کارتابل گروهی' to='/dashboard' />
      <MenuItem title='امکانات' to='/dashboard' />
      <MenuItem title='مرکز مشتریان' to='/dashboard' />
      <MenuItem title='شرکت های زیر مجموعه' to='/dashboard' /> */}
        </>
    );
}
