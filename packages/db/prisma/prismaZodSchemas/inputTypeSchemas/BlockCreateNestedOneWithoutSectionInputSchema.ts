import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';
import { BlockCreateOrConnectWithoutSectionInputSchema } from './BlockCreateOrConnectWithoutSectionInputSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';

export const BlockCreateNestedOneWithoutSectionInputSchema: z.ZodType<Prisma.BlockCreateNestedOneWithoutSectionInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema).optional(),
  connect: z.lazy(() => BlockWhereUniqueInputSchema).optional(),
});

export default BlockCreateNestedOneWithoutSectionInputSchema;
