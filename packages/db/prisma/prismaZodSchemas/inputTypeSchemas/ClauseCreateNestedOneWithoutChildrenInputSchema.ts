import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutChildrenInputSchema } from './ClauseCreateWithoutChildrenInputSchema';
import { ClauseUncheckedCreateWithoutChildrenInputSchema } from './ClauseUncheckedCreateWithoutChildrenInputSchema';
import { ClauseCreateOrConnectWithoutChildrenInputSchema } from './ClauseCreateOrConnectWithoutChildrenInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseCreateNestedOneWithoutChildrenInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateNestedOneWithoutChildrenInput>;

export default ClauseCreateNestedOneWithoutChildrenInputSchema;
