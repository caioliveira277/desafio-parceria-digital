import React from 'react';
import { Container, InputLabel } from './styles';

export default function ProdutoLista() {
    return (
        <Container className="container">
            <InputLabel className="d-flex flex-column mt-4">
                <label for="busca" className="fw-bold mb-2">Buscar produtos</label>
                <fieldset className="d-flex">
                    <input type="text" className="form-control" placeholder="Buscar" />
                    <button class="btn d-flex flex-column justify-content-center">
                        <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.967 10.2093L7.39609 6.63847C7.95022 5.9221 8.24996 5.04623 8.24996 4.12498C8.24996 3.02224 7.81959 1.98824 7.04134 1.20862C6.2631 0.428998 5.22635 0 4.12498 0C3.02361 0 1.98687 0.430373 1.20862 1.20862C0.428998 1.98687 0 3.02224 0 4.12498C0 5.22635 0.430373 6.2631 1.20862 7.04134C1.98687 7.82097 3.02224 8.24996 4.12498 8.24996C5.04623 8.24996 5.92072 7.95022 6.6371 7.39747L10.208 10.967C10.2184 10.9774 10.2309 10.9857 10.2445 10.9914C10.2582 10.9971 10.2729 11 10.2877 11C10.3025 11 10.3172 10.9971 10.3309 10.9914C10.3446 10.9857 10.357 10.9774 10.3675 10.967L10.967 10.3688C10.9774 10.3584 10.9857 10.3459 10.9914 10.3322C10.9971 10.3186 11 10.3039 11 10.2891C11 10.2743 10.9971 10.2596 10.9914 10.2459C10.9857 10.2322 10.9774 10.2198 10.967 10.2093ZM6.30297 6.30297C5.71998 6.8846 4.94723 7.20497 4.12498 7.20497C3.30274 7.20497 2.52999 6.8846 1.94699 6.30297C1.36537 5.71998 1.045 4.94723 1.045 4.12498C1.045 3.30274 1.36537 2.52861 1.94699 1.94699C2.52999 1.36537 3.30274 1.045 4.12498 1.045C4.94723 1.045 5.72135 1.36399 6.30297 1.94699C6.8846 2.52999 7.20497 3.30274 7.20497 4.12498C7.20497 4.94723 6.8846 5.72135 6.30297 6.30297Z" fill="#FAFAFA"/>
                        </svg>
                    </button>
                </fieldset>
                <small className="text-muted mt-1">Encontre produtos por nome, marca ou preço</small>
            </InputLabel>
        </Container>
    )
}