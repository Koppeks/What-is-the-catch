import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutParentInputSchema } from './BlockCreateWithoutParentInputSchema';
import { BlockUncheckedCreateWithoutParentInputSchema } from './BlockUncheckedCreateWithoutParentInputSchema';
import { BlockCreateOrConnectWithoutParentInputSchema } from './BlockCreateOrConnectWithoutParentInputSchema';
import { BlockCreateManyParentInputEnvelopeSchema } from './BlockCreateManyParentInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';

export const BlockUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.BlockUncheckedCreateNestedManyWithoutParentInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutParentInputSchema), z.lazy(() => BlockCreateWithoutParentInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutParentInputSchema), z.lazy(() => BlockCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
});

export default BlockUncheckedCreateNestedManyWithoutParentInputSchema;
