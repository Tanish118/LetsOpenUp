import React, { useState ,useEffect} from 'react';

function Room({ roomName, token, handleLogout }) {
const [room, setRoom] = useState(null);
const [participants, setParticipants] = useState([]);
const remoteParticipants = participants.map(participant => (
    <p key={participant.sid}>{participant.identity}</p>
  ));
  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };
    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };
    // Video.connect(token, {
    //   name: roomName
    // }).then(room => {
    //   setRoom(room);
    //   room.on('participantConnected', participantConnected);
    //   room.on('participantDisconnected', participantDisconnected);
    //   room.participants.forEach(participantConnected);
    // });
  });
  
    return (
      
        <div className="room">
      <h2>Room: {roomName}</h2>
      <button onClick={handleLogout}>Log out</button>
      <div className="local-participant">
        {room ? (
          <p key={room.localParticipant.sid}>{room.localParticipant.identity}</p>
        ) : (
          ''
        )}
      </div>
      <h3>Remote Participants</h3>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
    )
}

export default Room
