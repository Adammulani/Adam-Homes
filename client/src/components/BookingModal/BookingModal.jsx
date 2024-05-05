import { Button, Modal } from '@mantine/core'
import {DatePicker} from "@mantine/dates"
import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import UserDetailContext from '../../context/userDetailContext'
import { bookVisit } from '../../utils/api'
import { toast } from 'react-toastify'
import dayjs from 'dayjs';


export const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },setUserDetails } = useContext(UserDetailContext);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  const handleBookingSuccess = () => {
    toast.success("Your appointment has been confirmed", {
      position: "bottom-right",
    });

    setUserDetails((prev)=>({
        ...prev,
        bookings:[
            ...prev.bookings,
            {
                id:propertyId,date:dayjs(value).format('DD/MM/YYYY')
            }
        ]
    }))
  };
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="On which date you want to visit"
      centered
    >
      <div className="flexColCenter">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book your visit
        </Button>
      </div>
    </Modal>
  );
};
