import React , {useState, useCallback} from 'react';


const Insert = ({onInsert}) => {

    const [title, setTitle] = useState();
    const [targetPeriod, setTargetPeriod] = useState();


    const onChangeTitle = useCallback(e => {
        setTitle(e.target.value);
      
    },[])


    const onChangeTargetPeriod = useCallback(e => {
        setTargetPeriod(e.target.value);
    },[])

    
    const onSubmit = useCallback(
        e => {
            onInsert(title, targetPeriod)
            // 값 초기화
            setTitle('');
            setTargetPeriod('');
            // submit 이벤트는 브라우저에서 새로고침을 발생 시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, title, targetPeriod],
    );


    return (


        <form className="Insert"  onSubmit={onSubmit}>
            <h3>&lt;입력란&gt;</h3><br/>
          제목 : <input name='title' type = 'text' placeholder='제목을 입력 하세요.' value={title} onChange={onChangeTitle}/>
          주기(단위,일) : <input name='targetPeriod' type = 'text' placeholder='주기를 숫자로 입력하세요' value={targetPeriod} onChange={onChangeTargetPeriod} />
          <button type='submit'>생성</button>
        </form>



    )
}

export default Insert;