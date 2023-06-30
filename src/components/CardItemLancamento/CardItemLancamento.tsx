import { View, StyleSheet } from 'react-native'
import { List, ListItem, Icon, IconElement, IconProps, Text, Divider, Button, Layout } from '@ui-kitten/components'
import { getTransacoes } from '../../redux/Redux.store'
import { useDispatch, useSelector } from 'react-redux'
import { storeStateType } from '../../redux'
import { useEffect } from 'react'
import { Transacao } from '../../model/transacao'

interface CardItemLancamentoProps {
    nome: string
    descricao: string
    data: string
    preco: number
}

/*const data = new Array(4).fill({
    nome: 'Coxinha',
    data: '10/10/2020',
    descricao: 'Alimentação',
    preco: 250
})*/

export const CardItemLancamento = () => {
    const stock = useSelector((state: storeStateType) => state.stock)

    const data: Transacao[] = stock.transacoes

    const renderIconLeft = (props: IconProps): IconElement => (
        <Icon {...props} name='cube'></Icon>
    )

    const BoxIcon = (props: IconProps): React.ReactElement => (
        <Icon {...props} name='cube' fill='black' style={{ width: 30, height: 30 }}></Icon>
    )

    const renderItem = ({ item, index }: { item: Transacao, index: number }) => (
        <>
            <ListItem>
                <View style={styles.listItemContainer}>
                    <View style={{ gap: 5 }}>
                        <View style={styles.container}>
                            <Text>{item.data}</Text>
                            <Text> - </Text>
                            <Text style={{ fontWeight: 'bold' }}>{item.descricao}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <BoxIcon></BoxIcon>
                            <Text> {item.descricao}</Text>
                        </View>

                    </View>
                    <View>
                        <Text status='danger' style={styles.itemPrice}>R$ {item.valor.toFixed(2)}</Text>
                    </View>
                </View>
            </ListItem>
            <Divider></Divider>
        </>

    )

    return (
        <View>
            <List
                data={data}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row'
    },

    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})