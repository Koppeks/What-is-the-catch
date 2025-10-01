import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseScalarWhereInputSchema } from './ClauseScalarWhereInputSchema';
import { ClauseUpdateManyMutationInputSchema } from './ClauseUpdateManyMutationInputSchema';
import { ClauseUncheckedUpdateManyWithoutParentInputSchema } from './ClauseUncheckedUpdateManyWithoutParentInputSchema';

export const ClauseUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => ClauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClauseUpdateManyMutationInputSchema),z.lazy(() => ClauseUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpdateManyWithWhereWithoutParentInput>;

export default ClauseUpdateManyWithWhereWithoutParentInputSchema;
