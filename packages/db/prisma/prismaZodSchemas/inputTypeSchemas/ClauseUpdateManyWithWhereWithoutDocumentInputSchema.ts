import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';
import { ClauseUpdateManyMutationInputSchema } from './ClauseUpdateManyMutationInputSchema';
import { ClauseUncheckedUpdateManyWithoutDocumentInputSchema } from './ClauseUncheckedUpdateManyWithoutDocumentInputSchema';

export const ClauseUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => ClauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateManyMutationInputSchema),z.lazy(() => ClauseUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutDocumentInput>;

export default ClauseUpdateManyWithWhereWithoutDocumentInputSchema;
