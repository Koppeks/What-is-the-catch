import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutChildrenInputSchema } from './BlockCreateWithoutChildrenInputSchema';
import { BlockUncheckedCreateWithoutChildrenInputSchema } from './BlockUncheckedCreateWithoutChildrenInputSchema';
import { BlockCreateOrConnectWithoutChildrenInputSchema } from './BlockCreateOrConnectWithoutChildrenInputSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';

export const BlockCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.BlockCreateNestedOneWithoutChildrenInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlockCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => BlockWhereUniqueInputSchema).optional(),
});

export default BlockCreateNestedOneWithoutChildrenInputSchema;
