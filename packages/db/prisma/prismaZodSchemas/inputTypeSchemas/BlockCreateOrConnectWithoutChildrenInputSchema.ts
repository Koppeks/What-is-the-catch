import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockCreateWithoutChildrenInputSchema } from './BlockCreateWithoutChildrenInputSchema';
import { BlockUncheckedCreateWithoutChildrenInputSchema } from './BlockUncheckedCreateWithoutChildrenInputSchema';

export const BlockCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlockCreateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedCreateWithoutChildrenInputSchema) ]),
});

export default BlockCreateOrConnectWithoutChildrenInputSchema;
