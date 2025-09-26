import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeCreateWithoutTriggerInputSchema } from './ClauseTypeCreateWithoutTriggerInputSchema';
import { ClauseTypeUncheckedCreateWithoutTriggerInputSchema } from './ClauseTypeUncheckedCreateWithoutTriggerInputSchema';
import { ClauseTypeCreateOrConnectWithoutTriggerInputSchema } from './ClauseTypeCreateOrConnectWithoutTriggerInputSchema';
import { ClauseTypeWhereUniqueInputSchema } from './ClauseTypeWhereUniqueInputSchema';

export const ClauseTypeCreateNestedOneWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseTypeCreateNestedOneWithoutTriggerInput> = z.object({
  create: z.union([ z.lazy(() => ClauseTypeCreateWithoutTriggerInputSchema),z.lazy(() => ClauseTypeUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseTypeCreateOrConnectWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => ClauseTypeWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeCreateNestedOneWithoutTriggerInput>;

export default ClauseTypeCreateNestedOneWithoutTriggerInputSchema;
