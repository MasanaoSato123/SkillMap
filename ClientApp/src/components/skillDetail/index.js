import React, { Component } from 'react';
import pic from '../../images/man.png';

export class index extends Component {

//一括コメントアウト Ctl+K, Ctl+C
//整形 ctl+K, Ctl+D

    render() {
        return (
            <div style={{ display: 'flex', paddingLeft: '200px' }} >
                <div style={{ border: 'solid 2px #000000' }}>
                    <img src={pic} />
                </div>
                <div style={{ display: 'flex', flexFlow: 'column', paddingLeft: '80px', justifyContent: 'center', fontSize: '20px' }}>
                    <table style={{ border: 'solid 1px #000000', height: '200px' } }>
                        <tr style={{ border: 'solid 1px #000000' }}>
                            <td style={{ border: 'solid 1px #000000', backgroundColor: '#f5f5f5', paddingRight: '100px' }}>氏名</td>
                            <td style={{ paddingRight: '300px' }}>片江 保雄</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #000000' }}>
                            <td style={{ border: 'solid 1px #000000', backgroundColor: '#f5f5f5' }}>部門</td>
                            <td>九州SIビジネス本部</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #000000' }}>
                            <td style={{ border: 'solid 1px #000000', backgroundColor: '#f5f5f5' }}>チーム</td>
                            <td>平田チーム</td>
                        </tr>
                        <tr style={{ border: 'solid 1px #000000' }}>
                            <td style={{ border: 'solid 1px #000000', backgroundColor: '#f5f5f5' }}>ランク</td>
                            <td>SC2</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default index;