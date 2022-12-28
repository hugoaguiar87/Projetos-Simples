import * as S from './style'
import downImage from '../../assets/down.png'
import upImage from '../../assets/up.png'

const GridItem = ({data}) => {
    return (
        <S.Main style={{backgroundColor: data.color}}>
            <div className='icon'>
                <img src={data.icon === 'up' ? upImage : downImage} alt='' width={30}/>
            </div>

            <div className='title'>
                {data.title}
            </div>

            {data.yourImc && 
                <div className='yourImc'>
                    Seu IMC é {data.yourImc} kg/m².
                </div>
            }

            <div className='info'>
                IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
            </div>
        </S.Main>
    )
}

export default GridItem;