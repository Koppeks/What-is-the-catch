import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutChildrenInputSchema } from './ClauseCreateWithoutChildrenInputSchema';
import { ClauseUncheckedCreateWithoutChildrenInputSchema } from './ClauseUncheckedCreateWithoutChildrenInputSchema';

export const ClauseCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutChildrenInputSchema), z.lazy(() => ClauseUncheckedCreateWithoutChildrenInputSchema) ]),
});

export default ClauseCreateOrConnectWithoutChildrenInputSchema;
