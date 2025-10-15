import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutChildrenInputSchema } from './SectionCreateWithoutChildrenInputSchema';
import { SectionUncheckedCreateWithoutChildrenInputSchema } from './SectionUncheckedCreateWithoutChildrenInputSchema';
import { SectionCreateOrConnectWithoutChildrenInputSchema } from './SectionCreateOrConnectWithoutChildrenInputSchema';
import { SectionUpsertWithoutChildrenInputSchema } from './SectionUpsertWithoutChildrenInputSchema';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateToOneWithWhereWithoutChildrenInputSchema } from './SectionUpdateToOneWithWhereWithoutChildrenInputSchema';
import { SectionUpdateWithoutChildrenInputSchema } from './SectionUpdateWithoutChildrenInputSchema';
import { SectionUncheckedUpdateWithoutChildrenInputSchema } from './SectionUncheckedUpdateWithoutChildrenInputSchema';

export const SectionUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.SectionUpdateOneWithoutChildrenNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => SectionUpsertWithoutChildrenInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SectionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SectionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SectionUpdateToOneWithWhereWithoutChildrenInputSchema), z.lazy(() => SectionUpdateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
});

export default SectionUpdateOneWithoutChildrenNestedInputSchema;
