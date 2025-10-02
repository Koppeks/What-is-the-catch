import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';
import { ClauseUpdateManyMutationInputSchema } from './ClauseUpdateManyMutationInputSchema';
import { ClauseUncheckedUpdateManyWithoutDocumentInputSchema } from './ClauseUncheckedUpdateManyWithoutDocumentInputSchema';

export const ClauseUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => ClauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateManyMutationInputSchema), z.lazy(() => ClauseUncheckedUpdateManyWithoutDocumentInputSchema) ]),
});

export default ClauseUpdateManyWithWhereWithoutDocumentInputSchema;
