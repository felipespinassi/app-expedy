import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query';
import { getService } from '../../../../../../services/getService';
import { Adapt, Select, Sheet } from 'tamagui';
import axios from 'axios';
import { getAccess_token } from '../../../../../../storage/getAccess_token';

export default function SelectIntegracoes(props: any) {
    const { data: response, isFetching }: UseQueryResult<any> =
        useQuery(
            "Integracoes",
            async () => await getService(`front/integracoes`, {})
        );



    console.log(props.integracao)
    return (
        <Select
            value={props.integracaoId}
            onValueChange={props.setIntegracaoId}
            disablePreventBodyScroll
            {...props}
        >
            <Select.Trigger width={220}>
                <Select.Value placeholder="Selecione a integração" />
            </Select.Trigger>
            <Adapt when="sm" platform="touch">
                <Sheet
                    native={!!props.native}
                    modal
                    dismissOnSnapToBottom
                    animationConfig={{
                        type: "spring",
                        damping: 20,
                        mass: 1.2,
                        stiffness: 250,
                    }}
                >
                    <Sheet.Frame>
                        <Sheet.ScrollView>
                            <Adapt.Contents />
                        </Sheet.ScrollView>
                    </Sheet.Frame>

                    <Sheet.Overlay
                        animation="lazy"
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                    />
                </Sheet>
            </Adapt>
            <Select.Content zIndex={200000}>
                <Select.Viewport minWidth={200}>
                    <Select.Group>
                        <Select.Label>Integração</Select.Label>

                        {useMemo(
                            () =>
                                response?.data.integracoes.map((item: any, i: any) => {
                                    return (
                                        <Select.Item
                                            index={i}
                                            key={item.id}
                                            value={item?.id}
                                        >
                                            <Select.ItemText

                                            >{item?.descricao}</Select.ItemText>

                                        </Select.Item>
                                    );
                                }),

                            [response?.data.integracoes]
                        )}
                    </Select.Group>


                </Select.Viewport>

            </Select.Content>
        </Select>


    );
}
