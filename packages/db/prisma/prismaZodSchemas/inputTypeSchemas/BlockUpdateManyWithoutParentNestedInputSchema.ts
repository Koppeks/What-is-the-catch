import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutParentInputSchema } from './BlockCreateWithoutParentInputSchema';
import { BlockUncheckedCreateWithoutParentInputSchema } from './BlockUncheckedCreateWithoutParentInputSchema';
import { BlockCreateOrConnectWithoutParentInputSchema } from './BlockCreateOrConnectWithoutParentInputSchema';
import { BlockUpsertWithWhereUniqueWithoutParentInputSchema } from './BlockUpsertWithWhereUniqueWithoutParentInputSchema';
import { BlockCreateManyParentInputEnvelopeSchema } from './BlockCreateManyParentInputEnvelopeSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithWhereUniqueWithoutParentInputSchema } from './BlockUpdateWithWhereUniqueWithoutParentInputSchema';
import { BlockUpdateManyWithWhereWithoutParentInputSchema } from './BlockUpdateManyWithWhereWithoutParentInputSchema';
import { BlockScalarWhereInputSchema } from './BlockScalarWhereInputSchema';

export const BlockUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.BlockUpdateManyWithoutParentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutParentInputSchema), z.lazy(() => BlockCreateWithoutParentInputSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlockCreateOrConnectWithoutParentInputSchema), z.lazy(() => BlockCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlockUpsertWithWhereUniqueWithoutParentInputSchema), z.lazy(() => BlockUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlockCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlockWhereUniqueInputSchema), z.lazy(() => BlockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlockUpdateWithWhereUniqueWithoutParentInputSchema), z.lazy(() => BlockUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlockUpdateManyWithWhereWithoutParentInputSchema), z.lazy(() => BlockUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlockScalarWhereInputSchema), z.lazy(() => BlockScalarWhereInputSchema).array() ]).optional(),
});

export default BlockUpdateManyWithoutParentNestedInputSchema;
