import React from "react";
import { Center } from "@chakra-ui/react";
export default function Access() {
  return (
    <div>
      <Center m="5">
        <iframe
          width="600"
          height="500"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/place/Nijubashi+Square/@35.6779115,139.7615868,19.5z/data=!4m15!1m8!3m7!1s0x605d1b87f02e57e7:0x2e01618b22571b89!2sTokyo!3b1!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms!3m5!1s0x60188bff4329ee1f:0xf1bf4b58b98003c1!8m2!3d35.6778127!4d139.7613388!16s%2Fg%2F11f7r541jm?entry=ttu"
        ></iframe>
      </Center>
    </div>
  );
}
