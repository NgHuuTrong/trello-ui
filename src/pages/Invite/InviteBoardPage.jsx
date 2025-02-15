import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import Button from '../../ui/Button';
import { useAcceptBoardLink, useBoardByToken } from '../../hooks/useBoard';

function InviteBoardPage() {
    const { board, isLoading } = useBoardByToken();
    const { isAccepting, mutate: acceptBoardLink } = useAcceptBoardLink();

    const { token } = useParams();
    const navigate = useNavigate();

    if (isLoading || isAccepting) return <Spinner />;

    return <div className="flex flex-col items-center space-y-10 bg-[--color-grey-0] w-screen h-screen pt-40">
        <p className='text-4xl text-[--color-grey-900]'>
            You are invited to join <span className="text-[--color-grey-800] font-medium">{board.name}!</span>
        </p>
        <Button
            type='primary'
            size='large'
            disabled={isAccepting}
            onClick={() => {
                acceptBoardLink(token, {
                    onSuccess: () => navigate(`/b/${board.id}/board-detail`, {
                        replace: true
                    })
                })
            }}
        >
            Join board
        </Button>
    </div>
}

export default InviteBoardPage;
